import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio</Preview>

      <Tailwind>
        <Body className="bg-gray-100 text-black font-sans">
          <Container className="mx-auto my-10 max-w-xl px-4">
            <Section className="rounded-lg bg-white px-6 py-5 shadow-sm">
              <Heading className="mb-4 text-lg font-semibold">
                New contact form message
              </Heading>

              <Text className="mb-2 text-sm text-gray-600">
                You received a new message from your portfolio website.
              </Text>

              <Hr className="my-4" />

              <Text className="mb-4 whitespace-pre-line text-sm text-gray-800">
                {message}
              </Text>

              <Hr className="my-4" />

              <Text className="text-sm text-gray-600">
                Sender email:
              </Text>
              <Text className="text-sm font-medium text-gray-900">
                {senderEmail}
              </Text>
            </Section>

            <Text className="mt-6 text-center text-xs text-gray-400">
              This email was sent from your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
