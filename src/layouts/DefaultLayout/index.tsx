import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header";

export function DefaultLayout() {
    return (
        <div className="max-w-[1440px] min-h-screen px-40 py-8 flex flex-col" >
            <Header />

            <Outlet />
        </div>
    );
}
