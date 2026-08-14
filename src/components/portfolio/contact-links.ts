import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { links } from "@/config/portfolio";

export const contactLinks = [
  { label: "Email", href: `mailto:${links.email}`, icon: Mail },
  { label: "GitHub", href: links.github, icon: Github },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin },
  { label: "WhatsApp", href: links.whatsapp, icon: MessageCircle },
];
