import Section from '@/components/ui/section'
import { Blocks } from 'lucide-react'
import React from 'react'

export default function Feature() {
    return (
        <Section>
            <div className="grid gap-base sm:grid-cols-2 md:grid-cols-3">
                {[1, 2, 3].map(item => (
                    <div className="p-base flex-center flex-col gap-sm bg-gradient-to-br from-secondary to-secondary  hover:to-secondary/70 rounded overflow-hidden" key={item + "FeatureCard"}>
                        <Blocks className='size-12' />
                        <div className="text-lg font-bold">All-in-one toolkit</div>
                        <p className='text-center'>Create powerful alarms tailored specifically to you. Our platform is trusted by thousands of traders, enthusiasts and businesses.</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
