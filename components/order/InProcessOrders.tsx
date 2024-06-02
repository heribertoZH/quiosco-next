// components/order/InProcessOrders.tsx
import useSWR from "swr";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";

const InProcessOrders = () => {
    const url = '/orders/api';
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data);
    const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 1000,
        revalidateOnFocus: false,
    });

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar las órdenes en proceso.</p>;

    console.log(data);  // Agrega este log para verificar los datos

    const inProcessOrders = data?.filter(order => !order.status);

    return (
        <>
            <h2 className="text-center mt-10 text-4xl font-bold">Órdenes en Proceso</h2>
            {inProcessOrders && inProcessOrders.length ? (
                <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                    {inProcessOrders.map(order => (
                        <LatestOrderItem 
                            key={order.id}
                            order={order}
                        />
                    ))}
                </div>
            ) : <p className="text-center my-10">No hay órdenes en proceso</p>}
        </>
    );
}

export default InProcessOrders;
