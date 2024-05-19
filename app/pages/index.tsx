import { IProductState } from "@/store/product/types";
import { generateKey } from "@/utils/generateKey";
import Head from "next/head";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import styles from "./home.module.css";
import useHome from "./useHome";
const Filters = lazy(() => import("./components/Filters"));
const Product = lazy(() => import("./components/Product"));
export default function Home() {
  const {
    filter,
    filterByPrice,
    params,
    products,
    sort,
    updateMax,
    updateMin,
    updatePrice,
    updateSearchTerm,
    updateSort,
    values,
    getProducts,
  } = useHome();

  return (
    <>
      <Head>
        <title>Mercado Livre - Teste Frontend</title>
        <meta
          name="description"
          content="Teste feito por Thiago Azevedo para o Mercado Livre"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href={
            "https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg"
          }
        />
      </Head>
      <main className={styles.main}>
        <Header
          handleChangeSearchTerm={updateSearchTerm}
          action={getProducts}
        />
        <Suspense>
          {products.length && (
            <div className={styles.wrapperFiltersAndProducts}>
              <Filters
                updatePrice={updatePrice}
                updateSort={updateSort}
                sort={sort}
                filters={filter}
                params={params}
                updateMin={updateMin}
                updateMax={updateMax}
                values={values}
                actionFilter={filterByPrice}
              />
              <div className={styles.WrapperProducts}>
                {products.map((product: IProductState) => (
                  <Product key={generateKey()} item={product} />
                ))}
              </div>
            </div>
          )}
        </Suspense>
      </main>
    </>
  );
}
