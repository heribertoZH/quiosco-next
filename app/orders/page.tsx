// pages/orders/OrdersPage.tsx
"use client"
import useSWR from "swr";
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";
import InProcessOrders from "@/components/order/InProcessOrders";

export default function OrdersPage() {
    const url = '/orders/api';
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data);
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 1000,
        revalidateOnFocus: false,
    });

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar las órdenes.</p>;

    const readyOrders = data?.filter(order => order.status);

    return (
        <>
            <h1 className="text-center mt-20 text-6xl font-black">Órdenes Listas</h1>

            <Logo />

            {readyOrders && readyOrders.length ? (
                <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                    {readyOrders.map(order => (
                        <LatestOrderItem 
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : <p className="text-center my-10">No hay órdenes listas</p>}

            <InProcessOrders />
        </>
    );
}
