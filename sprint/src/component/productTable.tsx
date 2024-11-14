import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  rating: { count: number };
}

const ProductTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch product data from the API
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);

  // Define columns for the table
  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: 'title',
      header: 'Name',
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'price',
      header: 'Price',
      cell: ({ getValue }) => `$${getValue()}`,
    },
    {
      accessorKey: 'image',
      header: 'Image',
      cell: ({ getValue }) => (
        <img src={getValue() as string} alt="Product" style={{ width: '50px' }} />
      ),
    },
    {
      accessorKey: 'rating.count',
      header: 'Quantity',
    },
    {
      accessorKey: 'rating.count',
      header: 'In Stock',
      cell: ({ row }) => (row.original.rating.count > 0 ? 'Yes' : 'No'),
    },
  ];

  // Use TanStack Table hooks
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      onClick={header.column.getToggleSortingHandler()}
                      style={{ cursor: 'pointer' }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          ' 🔽'
                        ) : (
                          ' 🔼'
                        )
                      ) : null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
