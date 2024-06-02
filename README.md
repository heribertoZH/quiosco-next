This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Se muestran las categorias disponibles del quiosco con su respectivo icono para cada uno.

Listado de los productos por categoria con sus precios.

Se muestran las ordenes que los clientes desean, se muestra el producto, se puede modificar la cantidad, se muestra el subtotal de cada producto, se puede eliminar algun producto que no se deseé pedir y por ultimo se muestra el total a pagar.

-- Segundo Release--
Gestión de la Orden
Confirmación y Envío
US6: Como usuario, quiero confirmar mi pedido y que este se envíe automáticamente a la cocina.


-- Tercer Release--
Procesamiento de la Orden en Cocina
Recepción de Pedidos
US7: Como personal de cocina, quiero ver los pedidos que han sido confirmados por los clientes para comenzar a prepararlos.

Notificación y Preparación
US8: Como personal de cocina, quiero marcar un pedido como completado y que el cliente reciba una notificación de que su orden está lista para ser recogida.

Notificación al Cliente
US9: Como usuario, quiero ver cuando mi pedido está listo para ser recogido.

-- Cuarto Release--
En este release incorporo mi componente InProcessOrders.tsx el cual muestra a los usuarios las ordenes que se estan procesando en la ventana de ordenes listas.