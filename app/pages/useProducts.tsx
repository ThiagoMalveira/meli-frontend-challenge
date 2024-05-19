import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { ProductService } from "@/service/product";
import { searchProducts } from "@/store/product/actions";
import { IProductParams } from "@/types/Products";
import { useCallback, useState } from "react";

const useProducts = () => {
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

  const updateSort = async (newSort: string) => {
    setParams((prevParams) => {
      const updatedParams = {
        ...prevParams,
        sort: newSort,
      };
      getProducts(updatedParams);
      return updatedParams;
    });
  };

  const updatePrice = (newPrice: string) => {
    setParams((prevParams) => {
      const updatedParams = {
        ...prevParams,
        price: newPrice,
      };
      getProducts(updatedParams);
      return updatedParams;
    });
  };

  const filterByPrice = () => {
    if (values.min !== "" || values.max !== "") {
      setParams((prevParams) => {
        const updatedParams = {
          ...prevParams,
          price: `${values.min}-${values.max}`,
        };
        getProducts(updatedParams);
        return updatedParams;
      });
    }
  };

  const getProducts = useCallback(
    (Params: IProductParams) => {
      dispatch(searchProducts(productService, Params));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

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

export default useProducts;
