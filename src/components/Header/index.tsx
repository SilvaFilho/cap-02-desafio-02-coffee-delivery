import { MapPin, ShoppingCart } from "phosphor-react";

import logoCoffeeDelivery from "../../assets/logo-coffee-delivery.svg";

export function Header() {
    return (
        <header
            className="w-full flex flex-row justify-between"
        >
            <img src={logoCoffeeDelivery} alt="logo da loja de cafés" />
            {/* border-2 border-solid border-yellow-dark */}
            <div className="flex items-center gap-3 " >
                <div className="p-2 flex gap-1 bg-purple-light rounded-md" >
                    <MapPin size={22} color="#8047F8" weight="fill" />

                    <span className="text-sm" >Posto Alegre, RS</span>
                </div>

                <button type="button" className="p-2 bg-yellow-light rounded-md">
                    <ShoppingCart size={22} color="#C47F17" weight="fill" />
                </button>
            </div>
        </header>
    );
}
/* padding: 32px 160px; */