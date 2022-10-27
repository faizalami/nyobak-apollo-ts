/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "query get_all_ads {\n  ads {\n    data {\n      id\n      attributes {\n        name\n        product_id\n        is_wishlisted @client\n      }\n    }\n  }\n}": types.Get_All_AdsDocument,
    "query get_all_products {\n  products {\n    data {\n      id\n      attributes {\n        product_id\n        name\n        wishlist\n        is_wishlisted @client\n      }\n    }\n  }\n}": types.Get_All_ProductsDocument,
    "mutation update_product($id: ID!, $data: ProductInput!) {\n  updateProduct(id: $id, data: $data) {\n    data {\n      id\n      attributes {\n        product_id\n        name\n        wishlist\n      }\n    }\n  }\n}": types.Update_ProductDocument,
};

export function graphql(source: "query get_all_ads {\n  ads {\n    data {\n      id\n      attributes {\n        name\n        product_id\n        is_wishlisted @client\n      }\n    }\n  }\n}"): (typeof documents)["query get_all_ads {\n  ads {\n    data {\n      id\n      attributes {\n        name\n        product_id\n        is_wishlisted @client\n      }\n    }\n  }\n}"];
export function graphql(source: "query get_all_products {\n  products {\n    data {\n      id\n      attributes {\n        product_id\n        name\n        wishlist\n        is_wishlisted @client\n      }\n    }\n  }\n}"): (typeof documents)["query get_all_products {\n  products {\n    data {\n      id\n      attributes {\n        product_id\n        name\n        wishlist\n        is_wishlisted @client\n      }\n    }\n  }\n}"];
export function graphql(source: "mutation update_product($id: ID!, $data: ProductInput!) {\n  updateProduct(id: $id, data: $data) {\n    data {\n      id\n      attributes {\n        product_id\n        name\n        wishlist\n      }\n    }\n  }\n}"): (typeof documents)["mutation update_product($id: ID!, $data: ProductInput!) {\n  updateProduct(id: $id, data: $data) {\n    data {\n      id\n      attributes {\n        product_id\n        name\n        wishlist\n      }\n    }\n  }\n}"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;