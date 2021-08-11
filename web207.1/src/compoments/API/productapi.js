import instance from "./instance";
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
  };