export const translateUrlParam = (url: string, obj: Record<string, string>) => {
  let translateUrlParam = url;

  Object.keys(obj).forEach((key) => {
    translateUrlParam = translateUrlParam.replace(`{{${key}}}`, obj[key]);
  });

  return translateUrlParam;
};
