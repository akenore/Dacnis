import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const BREVO_API_URL = "https://api.brevo.com/v3";

// Schema de validation robuste
const subscribeSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  company: z.string().optional(),
  commande: z.enum(["Location", "Achat"]),
  telephone: z.string().optional(),
  address: z.string().optional(),
  ville: z.string().optional(),
  codepostale: z.string().optional(),
  country: z.string().optional(),
  vat: z.string().optional(),
});

async function brevoRequest(endpoint: string, body: object) {
  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    throw new Error("BREVO_API_KEY est manquante dans .env");
  }

  const res = await fetch(`${BREVO_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error(`❌ Brevo Error: ${errText}`);
    try {
      const errJson = JSON.parse(errText);
      throw new Error(errJson.message || errJson.code || `Brevo error ${res.status}`);
    } catch {
      throw new Error(`Brevo error ${res.status}: ${errText}`);
    }
  }

  const contentType = res.headers.get("content-type");
  if (res.status === 204 || !contentType || !contentType.includes("application/json")) {
    return null;
  }

  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation des données
    const result = subscribeSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0]?.message || "Validation failed" },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      company,
      commande,
      telephone,
      address,
      ville,
      codepostale,
      country,
      vat
    } = result.data;

    const listId = process.env.LIST_ID ? parseInt(process.env.LIST_ID) : null;
    if (!listId) {
      throw new Error("LIST_ID est manquante dans .env");
    }

    // Synchronisation
    await brevoRequest("/contacts", {
      email,
      attributes: {
        NOM: name,
        NOM_DE_SOCIETE: company,
        TVA: vat || "",
        COMMANDE: commande,
        EMAIL: email,
        WHATSAPP: telephone || "",
        ADRESSE: address || "",
        CODEPOSTAL: codepostale || "",
        VILLE: ville || "",
        PAYS: country || "",
      },
      listIds: [listId],
      updateEnabled: true,
    });

    return NextResponse.json({
      success: true,
      message: "Contact enregistré avec succès dans Brevo (Liste: " + listId + ")."
    });

  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Erreur serveur";
    console.error("[subscribe] Erreur :", errorMsg);
    return NextResponse.json(
      { error: errorMsg },
      { status: 500 }
    );
  }
}
