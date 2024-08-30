import Section from "@/components/ui/section";
import Link from "next/link";

export default function CTA() {
    return (
        <Section>
            <div className="grid gap-base md:gap-block md:grid-cols-2">
                <div className="p-base bg-secondary hover:bg-secondary/70 flex gap-base group">
                    <div>
                        <div className="text-lg">Learn more about your platform.</div>
                        <Link className="text-primary hover:underline " href="/">
                            Learn More
                        </Link>
                    </div>
                </div>
                
                <div className="p-base bg-secondary hover:bg-secondary/70 flex gap-base group">
                    <div>
                        <div className="text-lg">Plans & Pricing.</div>
                        <Link className="text-primary hover:underline " href="/">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
