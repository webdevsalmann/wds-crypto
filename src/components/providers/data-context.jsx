"use client";
import { createContext, useContext, useState } from "react";
const DataContext = createContext();

// Crypto Data
export const cryptoData = [
    {
        label: "Bitcoin",
        value: "Bitcoin",
    },
    {
        label: "Ethereum",
        value: "Ethereum",
    },
    {
        label: "Tether",
        value: "Tether",
    },
    {
        label: "BNB",
        value: "BNB",
    }
];

// Currency Data
export const currencyData = [
    {
        label: "Dollar",
        value: "Dollar",
    },
    {
        label: "Ethereum",
        value: "Ethereum",
    },
    {
        label: "Yen",
        value: "Yen",
    }
];

// Wallet Data
export const walletData = [
    {
        label: "WazirX",
        value: "WazirX",
    },
    {
        label: "Coinbase",
        value: "Coinbase",
    },
    {
        label: "Binance",
        value: "Binance",
    }
];

export const DataProvider = ({ children }) => {
    const [cryptos, setCryptos] = useState(cryptoData);
    const [currency, setCurrency] = useState(currencyData);
    const [wallet, setWallet] = useState(walletData);

    const values = {
        cryptos,
        currency,
        wallet,
    };

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};

export default function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};
