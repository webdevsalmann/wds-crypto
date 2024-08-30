import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { CheckCheck } from "lucide-react";


export default function Pricing() {
    return (
        <Section>
            <div className="md:text-center">
                <h1>Simple Pricing</h1>
                <p>enjoy our features openly</p>
            </div>

            <div className="mt-block grid gap-base sm:grid-cols-2 md:grid-cols-3">
                {[1, 2, 3].map(item => (
                    <div className="p-base bg-secondary rounded overflow-hidden" key={item + "PricingCard"}>
                        <h2 className="h3 text-center">Category</h2>

                        <div className="text-center text-muted-foreground">
                            <span>$</span><span className="h2 text-primary">0.00</span><span>/month</span>
                        </div>

                        <ul className="mt-xl space-y-base">
                            <li className="flex items-start gap-xs">
                                <CheckCheck className="shrink-0 text-green-500" />
                                <div>
                                    Benefits that all you get, nowhere else in this or other website
                                </div>
                            </li>
                            <li className="flex items-start gap-xs">
                                <CheckCheck className="shrink-0 text-green-500" />
                                <div>
                                    Benefits that all you get, nowhere else in this or other website
                                </div>
                            </li>
                            <li className="flex items-start gap-xs">
                                <CheckCheck className="shrink-0 text-green-500" />
                                <div>
                                    Benefits that all you get, nowhere else in this or other website
                                </div>
                            </li>
                            <li className="flex items-start gap-xs">
                                <CheckCheck className="shrink-0 text-green-500" />
                                <div>
                                    Benefits that all you get, nowhere else in this or other website
                                </div>
                            </li>
                            <li className="flex items-start gap-xs">
                                <CheckCheck className="shrink-0 text-green-500" />
                                <div>
                                    Benefits that all you get, nowhere else in this or other website
                                </div>
                            </li>
                        </ul>

                        <div className="mt-base flex-center">
                            <Button>Subscribe</Button>

                        </div>

                    </div>
                ))}
            </div>
        </Section>
    )
}
