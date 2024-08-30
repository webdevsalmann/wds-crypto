"use client"
import useData from "@/components/providers/data-context";
import { Button } from "@/components/ui/button";
import CustomSelect from "@/components/ui/elements/custom-select";
import NumericInput from "@/components/ui/numeric-input";
import Section from "@/components/ui/section";
import TabContentWrapper from "@/components/ui/tab-content-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast";
import { hours, methods, minutes, multiples, thresholdConditions } from "@/lib/cms/datas";
import { BellRing } from "lucide-react";
import { useState } from "react";

export default function Hero() {
    return (
        <Section>
            <Tabs defaultValue="price">
                <TabsList className="">
                    <TabsTrigger value="price">Price</TabsTrigger>
                    <TabsTrigger value="percentage">Percentage</TabsTrigger>
                    <TabsTrigger value="periodic">Periodic</TabsTrigger>
                    <TabsTrigger value="volume">Volume</TabsTrigger>
                    {/* <TabsTrigger value="coin-listing">Coin Listing</TabsTrigger> */}
                    {/* <TabsTrigger value="wallet-watch">Wallet Watch</TabsTrigger> */}
                </TabsList>

                <TabsContent value="price"><PriceAlert /></TabsContent>
                <TabsContent value="percentage"><PercentageAlert /></TabsContent>
                <TabsContent value="periodic"><PeriodicAlert /></TabsContent>
                <TabsContent value="volume"><VolumeAlert /></TabsContent>
                <TabsContent value="coin-listing"><CoinListingAlert /></TabsContent>
                <TabsContent value="wallet-watch"><WalletWatchAlert /></TabsContent>

                <TabsList className="mt-2 md:hidden">
                    <TabsTrigger value="price">Price</TabsTrigger>
                    <TabsTrigger value="percentage">Percentage</TabsTrigger>
                    <TabsTrigger value="periodic">Periodic</TabsTrigger>
                    <TabsTrigger value="volume">Volume</TabsTrigger>
                    {/* <TabsTrigger value="coin-listing">Coin Listing</TabsTrigger> */}
                    {/* <TabsTrigger value="wallet-watch">Wallet Watch</TabsTrigger> */}
                </TabsList>
            </Tabs>
        </Section>
    )
}

export function PriceAlert() {
    const { cryptos, currency, wallet } = useData();
    const [priceDatas, setPriceDatas] = useState({
        method: "",
        crypto: "",
        thresholdConditions: "",
        price: "",
        currency: "",
        wallet: "",
    });

    const handleInputChange = (key, value) => {
        setPriceDatas(prev => ({ ...prev, [key]: value }));
    };

    const handleInput = (key, event) => {
        const value = event.target.value.replace(/[^0-9.]/g, '');
        setPriceDatas(prev => ({ ...prev, [key]: value }));
    };


    const handleClick = () => {
        toast({
            description: (
                <pre>{JSON.stringify(priceDatas, null, 2)}</pre>
            )
        });
    };

    const formFields = [
        { name: 'method', data: methods, label: 'Send me an' },
        { name: 'crypto', data: cryptos, label: 'as soon as' },
        { name: 'thresholdConditions', data: thresholdConditions, label: 'goes' },
        { name: 'currency', data: currency, label: 'the price of', isNumeric: true },
        { name: 'wallet', data: wallet, label: 'on' },
    ];

    return (
        <TabContentWrapper>
            <div className="">
                <div className="text-center">
                    <h2>Price Alert</h2>
                    <p>Get notified when a coin goes above or below a price target.</p>
                </div>

                <div className="mt-base grid place-items-end space-y-2">
                    {formFields.map(({ name, data, label, isNumeric }) => (
                        <div key={name} className="align-row">
                            <div className="justify-self-end">{label}</div>
                            {isNumeric ? (
                                <div className="flex items-center gap-2 w-fit justify-self-end sm:justify-self-start">
                                    <NumericInput
                                        name="price"
                                        value={priceDatas.price}
                                        onChange={(e) => handleInput("price", e)}
                                        placeholder="0.00"
                                    />
                                    <CustomSelect name={name} handleSelectChange={handleInputChange} data={data} />
                                </div>
                            ) : (
                                <CustomSelect name={name} handleSelectChange={handleInputChange} data={data} />
                            )}
                        </div>
                    ))}

                    <div className="pt-base w-full flex-center">
                        <Button className="group" variant="tertiary" onClick={handleClick}>
                            <BellRing className="group-hover:mr-2 w-0 group-hover:w-base shrink-0 transition-all" />
                            Set Alert
                        </Button>
                    </div>
                </div>
            </div>
        </TabContentWrapper>
    );
}

export function PercentageAlert() {
    const { cryptos, wallet } = useData();
    const [percentageData, setPercentageData] = useState({
        method: "",
        crypto: "",
        thresholdConditions: "",
        percentage: "",
        minutes: "",
        wallet: "",
    });

    const handleInputChange = (key, value) => {
        setPercentageData(prev => ({ ...prev, [key]: value }));
    };

    const handleNumericInput = (key, event) => {
        const value = event.target.value.replace(/[^0-9.]/g, '');
        setPercentageData(prev => ({ ...prev, [key]: value }));
    };

    const handleClick = () => {
        toast({
            description: (
                <pre>{JSON.stringify(percentageData, null, 2)}</pre>
            )
        });
    };

    const formFields = [
        { name: 'method', data: methods, label: 'Send me an' },
        { name: 'crypto', data: cryptos, label: 'as soon as' },
        { name: 'thresholdConditions', data: thresholdConditions, label: 'goes' },
        { name: 'percentage', label: 'by %', isNumeric: true },
        { name: 'minutes', data: minutes, label: 'within' },
        { name: 'wallet', data: wallet, label: 'on' },
    ];

    return (
        <TabContentWrapper>
            <div className="">
                <div className="text-center">
                    <h2>Percentage Alert</h2>
                    <p>Get notified when a coin goes above or below a percentage target.</p>
                </div>

                <div className="mt-base grid place-items-end space-y-2">
                    {formFields.map(({ name, data, label, isNumeric }) => (
                        <div key={name} className="align-row">
                            <div className="justify-self-end">{label}</div>
                            {isNumeric ? (
                                <div className="flex items-center gap-2 w-fit justify-self-end sm:justify-self-start">
                                    <NumericInput
                                        name={name}
                                        value={percentageData.percentage}
                                        onChange={(e) => handleNumericInput("percentage", e)}
                                        placeholder="0.00"
                                        className="inline-block min-w-16 max-w-24"
                                    />
                                </div>
                            ) : (
                                <CustomSelect
                                    name={name}
                                    data={data}
                                    handleSelectChange={handleInputChange}
                                />
                            )}
                        </div>
                    ))}

                    <div className="pt-base w-full flex-center">
                        <Button onClick={handleClick}>Set Alert</Button>
                    </div>
                </div>
            </div>
        </TabContentWrapper>
    );
}

export function PeriodicAlert() {
    const { cryptos, currency, wallet } = useData();
    const [periodicData, setPeriodicData] = useState({
        method: "",
        hours: "",
        crypto: "",
        price: "",
        currency: "",
        wallet: "",
    });

    const handleInputChange = (key, value) => {
        setPeriodicData(prev => ({ ...prev, [key]: value }));
    };

    const handleNumericInput = (key, event) => {
        const value = event.target.value.replace(/[^0-9.]/g, '');
        setPeriodicData(prev => ({ ...prev, [key]: value }));
    };

    const handleClick = () => {
        toast({
            description: (
                <pre>{JSON.stringify(periodicData, null, 2)}</pre>
            )
        });
    };

    const formFields = [
        { name: 'method', data: methods, label: 'Send me an' },
        { name: 'hours', data: hours, label: 'every' },
        { name: 'crypto', data: cryptos, label: 'with current price of' },
        { name: 'currency', data: currency, label: 'in', isNumeric: true },
        { name: 'wallet', data: wallet, label: 'on' },
    ];

    return (
        <TabContentWrapper>
            <div className="">
                <div className="text-center">
                    <h2>Periodic Alert</h2>
                    <p>Get notified when a coin goes above or below a price target.</p>
                </div>

                <div className="mt-base grid place-items-end space-y-2">
                    {formFields.map(({ name, data, label, isNumeric }) => (
                        <div key={name} className="align-row">
                            <div className="justify-self-end">{label}</div>
                            {isNumeric ? (
                                <div className="flex items-center gap-2 w-fit justify-self-end sm:justify-self-start">
                                    <NumericInput
                                        name="price"
                                        value={periodicData.price}
                                        onChange={(e) => handleNumericInput("price", e)}
                                        placeholder="0.00"
                                        className="inline-block min-w-16 max-w-24"
                                    />
                                    <CustomSelect
                                        name={name}
                                        data={data}
                                        handleSelectChange={handleInputChange}
                                    />
                                </div>
                            ) : (
                                <CustomSelect
                                    name={name}
                                    data={data}
                                    handleSelectChange={handleInputChange}
                                />
                            )}
                        </div>
                    ))}

                    <div className="pt-base w-full flex-center">
                        <Button onClick={handleClick}>Set Alert</Button>
                    </div>
                </div>
            </div>
        </TabContentWrapper>
    );
}

export function VolumeAlert() {
    const { cryptos, wallet } = useData();
    const [volumeData, setVolumeData] = useState({
        method: "",
        crypto: "",
        wallet: "",
        multiple: "",
        timeFrame: "",
    });

    const handleInputChange = (key, value) => {
        setVolumeData(prev => ({ ...prev, [key]: value }));
    };

    const handleClick = () => {
        toast({
            description: (
                <pre>{JSON.stringify(volumeData, null, 2)}</pre>
            )
        });
    };

    const formFields = [
        { name: 'method', data: methods, label: 'Send me an' },
        { name: 'crypto', data: cryptos, label: 'as soon as trading volume of' },
        { name: 'wallet', data: wallet, label: 'on' },
        { name: 'multiple', data: multiples, label: 'increase by' },
        { name: 'timeFrame', data: minutes, label: 'within' },
    ];

    return (
        <TabContentWrapper>
            <div className="">
                <div className="text-center">
                    <h2>Volume Alert</h2>
                    <p>Get notified when a coin goes above or below a price target.</p>
                </div>

                <div className="mt-base grid place-items-end space-y-2">
                    {formFields.map(({ name, data, label }) => (
                        <div key={name} className="align-row">
                            <div className="justify-self-end">{label}</div>
                            <CustomSelect
                                name={name}
                                data={data}
                                handleSelectChange={handleInputChange}
                            />
                        </div>
                    ))}

                    <div className="pt-base w-full flex-center">
                        <Button onClick={handleClick}>Set Alert</Button>
                    </div>
                </div>
            </div>
        </TabContentWrapper>
    );
}

export function CoinListingAlert() {
    const { cryptos, currency, wallet } = useData();

    return (
        <TabContentWrapper>
            {/* <div className=""></div> */}
            <div className="">
                <div className="text-center">
                    <h2>Coin Listing Alert</h2>
                    <p>Get notified when a coin goes above or below a price target.</p>
                </div>

                <div className="mt-base grid place-items-end space-y-2">
                    <div className="align-row">
                        <div className="justify-self-end">Send me an </div>
                        <CustomSelect data={methods} />
                    </div>

                    <div className="align-row">
                        <div className="justify-self-end">as soon as </div>
                        <CustomSelect data={cryptos} />
                    </div>

                    <div className="align-row">
                        <div className="justify-self-end">goes </div>
                        <CustomSelect data={thresholdConditions} />
                    </div>

                    <div className="align-row">
                        <div className="sm:justify-self-end">the price of</div>
                        <div className="flex items-center gap-2 w-fit justify-self-end sm:justify-self-start">
                            <NumericInput className="inline-block min-w-16 max-w-24" placeholder="0.00" />
                            <CustomSelect data={currency} />
                        </div>
                    </div>

                    <div className="align-row">
                        <div className="justify-self-end">on</div>
                        <CustomSelect data={wallet} />
                    </div>

                    <div className="pt-base w-full flex-center">
                        <Button>Set Alert</Button>
                    </div>
                </div>
            </div>
        </TabContentWrapper >
    )
}

export function WalletWatchAlert() {
    const { cryptos, currency, wallet } = useData();

    return (
        <TabContentWrapper>
            {/* <div className=""></div> */}
            <div className="">
                <div className="text-center">
                    <h2>Wallet Watch Alert</h2>
                    <p>Get notified when a coin goes above or below a price target.</p>
                </div>

                <div className="mt-base grid place-items-end space-y-2">
                    <div className="align-row">
                        <div className="justify-self-end">Send me an </div>
                        <CustomSelect data={methods} />
                    </div>

                    <div className="align-row">
                        <div className="justify-self-end">as soon as </div>
                        <CustomSelect data={cryptos} />
                    </div>

                    <div className="align-row">
                        <div className="justify-self-end">goes </div>
                        <CustomSelect data={thresholdConditions} />
                    </div>

                    <div className="align-row">
                        <div className="sm:justify-self-end">the price of</div>
                        <div className="flex items-center gap-2 w-fit justify-self-end sm:justify-self-start">
                            <NumericInput className="inline-block min-w-16 max-w-24" placeholder="0.00" />
                            <CustomSelect data={currency} />
                        </div>
                    </div>

                    <div className="align-row">
                        <div className="justify-self-end">on</div>
                        <CustomSelect data={wallet} />
                    </div>

                    <div className="pt-base w-full flex-center">
                        <Button>Set Alert</Button>
                    </div>
                </div>
            </div>
        </TabContentWrapper >
    )
}   
