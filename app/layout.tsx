import "./globals.css";
import type { Metadata } from "next";
import { getRequiredRequestClient } from "@/lib/clients/server";
import { buildClientMetadata, buildSiteJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const client = await getRequiredRequestClient();

  return buildClientMetadata(client);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayoutContent>{children}</RootLayoutContent>;
}

async function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const client = await getRequiredRequestClient();
  const siteJsonLd = buildSiteJsonLd(client);

  return (
    <html lang="fr">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
