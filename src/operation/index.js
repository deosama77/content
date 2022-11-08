import React from "react";
import "./Operation.css";
function ContentOperation(props) {
  return (
    <table>
     <thead>
     <tr>
       <th colSpan={3} className="main_header">
         Content Operation
       </th>
     </tr>
     </thead>
      <tbody>
        <tr>
          <td className="main_header"></td>
          <td className="main_header">FILL IN COLLUMN</td>
          <td className="main_header">DROP LIST</td>
        </tr>
        <tr>
          <td className="col_header">AD NAME</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">AUDIENCE INTEREST</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">TITLE</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">BODY</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">LINK DISCRIPTION</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">DISPLAY LINK</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">IMAGE/VIDOE FILE NAME</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">PRODUCT 1 - LINK</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">PRODUCT NAME</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">PRODUCT 1 DESCRIPTION</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">PRODUCT IMAGE HASH</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">CALL TO ACTION</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">STORE ID</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">AUTHOR</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="col_header">APPROVAL NAME</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}

export default ContentOperation;
