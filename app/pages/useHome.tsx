import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { ProductService } from "@/service/product";
import { searchProducts } from "@/store/product/actions";
import { IProductParams } from "@/types/Products";
import { useCallback, useState } from "react";

const useHome = () => {
  const productService = new ProductService();
  const dispatch = useAppDispatch();
  const { products, sort, filter } = useAppSelector((state) => state.products);
  const [params, setParams] = useState<IProductParams>({
    searchTerm: "",
    sort: "relevance",
    price: "",
  });
  const [values, setValues] = useState({
    min: "",
    max: "",
  });

  const updateSearchTerm = (newSearchTerm: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      searchTerm: newSearchTerm,
    }));
  };

  const updateMin = (newMin: string) => {
    setValues((prevParams) => ({
      ...prevParams,
      min: newMin,
    }));
  };

  const updateMax = (newMax: string) => {
    setValues((prevParams) => ({
      ...prevParams,
      max: newMax,
    }));
  };

  const updateSort = (newSort: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      sort: newSort,
    }));
    getProducts();
  };

  const updatePrice = (newPrice: string) => {
    setParams((prevParams) => ({
      ...prevParams,
      price: newPrice,
    }));
    getProducts();
  };

  const filterByPrice = () => {
    if (values.min !== "" || values.max !== "") {
      setParams((prevParams) => ({
        ...prevParams,
        price: `${values.min}-${values.max}`,
      }));
    }
    getProducts();
  };

  const getProducts = useCallback(() => {
    dispatch(searchProducts(productService, params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params]);

  return {
    params,
    products,
    sort,
    filter,
    values,
    updateSearchTerm,
    updateMin,
    updateMax,
    updateSort,
    updatePrice,
    filterByPrice,
    getProducts,
  };
};

export default useHome;
