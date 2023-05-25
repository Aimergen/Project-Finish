import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { contextMenuItems, requestGrid } from "../data/dummy";
import { Header } from "../components";
import { useCrud } from "../hooks/useCrud";
import { Link } from "react-router-dom";
import axios from "axios";

const Request = () => {
  const [products, setProduct] = useState();
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/products/false/false")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const { items: products } = useCrud("products/true/true");

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div className="flex items-center justify-between">
        <Header category="Page" title="Request" />
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={products}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {requestGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          {/* <ColumnDirective
            headerText="Actions"
            template={updateButton}
            width="120"
            textAlign="Center"
          />
          <ColumnDirective
            headerText="Actions"
            template={deleteButton}
            width="120"
            textAlign="Center"
          /> */}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Request;
// const Products = () => {
//   const { items: products, deleteItem, updateItem } = useCrud("products/true/true");

//   const editing = { allowDeleting: true, allowEditing: true };

//   const handleDelete = (id) => {
//     deleteItem(id);
//   };

//   const handleUpdate = (id, updatedItem) => {
//     updateItem(id, updatedItem);
//   };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       {/* ... your code ... */}
//       <GridComponent
//         // ... other props ...
//         editSettings={editing}
//         actionBegin={(args) => {
//           if (args.requestType === "delete") {
//             handleDelete(args.data[0]._id);
//           } else if (args.requestType === "save") {
//             handleUpdate(args.data[0]._id, args.data[0]);
//           }
//         }}
//       >
//         {/* ... columns */}
//       </GridComponent>
//     </div>
//   );
// };
