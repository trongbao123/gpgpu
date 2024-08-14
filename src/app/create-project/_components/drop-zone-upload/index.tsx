import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./index.scss";
import Image from "next/image";
import { fileData } from "@component/constants/constant";
import UploadingCard from "./UploadingCard";
import UploadedCard from "./UploadedCard";
type Props = {};

const DropzoneUpload = (props: Props) => {
    return (
        <div className="upload-container">
            <div className="upload-container-select-zone">
                <div className="icon-text">
                    <div className="icon">
                        <Image src="/images/file.svg" alt="file" width={18} height={18} />
                    </div>
                    <p>Click to select a files</p>
                </div>
                <div>
                    <Image
                        src="/images/icon_plus_add_file.svg"
                        alt="arrow"
                        width={24}
                        height={24}
                        className="icon-plus"
                    />
                </div>
            </div>
            <div className="upload-container-uploading">
                {fileData.uploadingOrFail.map((item, index) => (
                    <UploadingCard key={index} item={item} />
                ))}
            </div>
            <div className="upload-container-uploaded">
                {fileData.uploaded.map((item, index) => (
                    <UploadedCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default DropzoneUpload;
