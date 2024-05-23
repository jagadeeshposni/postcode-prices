// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type PricesTable = {
  id: number;
  trx_uid: string; // UUIDs are typically represented as strings in TypeScript
  price: number; // NUMERIC type can be represented as number
  transfer_date: string; // Dates are often represented as strings in ISO format
  postcode: string; // VARCHAR type maps to string
  property_type: string; // CHAR type maps to string
  age: string; // CHAR type maps to string
  duration: string; // CHAR type maps to string
  paon: string; // VARCHAR type maps to string
  soan: string; // VARCHAR type maps to string
  street: string; // VARCHAR type maps to string
  locality: string; // VARCHAR type maps to string
  city: string; // VARCHAR type maps to string
  district: string; // VARCHAR type maps to string
  county: string; // VARCHAR type maps to string
  ppd_cat_type: string; // CHAR type maps to string
  record_status: string; // CHAR type maps to string
};

export type PriceData = {
  transfer_date: string;
  price: string;
};

export type PriceDataByPropertyType = {
  transfer_date: string;
  terraced: string;
  semi_detached: string;
  detached: string;
  flats: string;
};

export type SampleData = {
  month: string;
  price: number;
};


export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type SampleType = {
  id: string;
  transfer_date: string;
  price: string;
};
