import Section from "@/components/ui/section";
import { CheckCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
    return (
        <Section sectionClassName="bg-secondary">
            <div className="grid md:grid-cols-2 gap-block">
                <div className="md:order-2">
                    <Image
                        className="size-full"
                        src="/notification.svg"
                        width={300}
                        height={300}
                        alt="Notification Icon"
                    />
                </div>
                
                <div className="flex-center">
                    <ul className="space-y-base w-full">
                        <li className="flex gap-sm items-center">
                            <CheckCheck className="size-4 shrink-0 text-green-500" />
                            <span>Set volatility alerts to learn about large price movements.</span>
                        </li>
                        <li className="flex gap-sm items-center">
                            <CheckCheck className="size-4 shrink-0 text-green-500" />
                            <span>Set price alerts against BTC or any fiat currency.</span>
                        </li>
                        <li className="flex gap-sm items-center">
                            <CheckCheck className="size-4 shrink-0 text-green-500" />
                            <span>Use our bots to intelligently enrich team chats.</span>
                        </li>
                        <li className="flex gap-sm items-center">
                            <CheckCheck className="size-4 shrink-0 text-green-500" />
                            <span>Detect price anomalies automatically.</span>
                        </li>
                        <li className="flex gap-sm items-center">
                            <CheckCheck className="size-4 shrink-0 text-green-500" />
                            <span>Get alerts by phone call to improve response times.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </Section>
    )
}
