import React, { Component, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const RichTextBox = () => {
  return (
    <div className="container">
      <CKEditor editor={ClassicEditor} />
    </div>
  );
};
