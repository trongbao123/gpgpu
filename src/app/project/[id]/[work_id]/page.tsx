import React from "react";
import ProjectContainer from "../../_components/project-container/projectContainer";
import NavToMain from "../../_components/nav-to-main";
import { project } from "@component/constants/constant";
import Image from "next/image";
import InformationProject from "../../_components/information";
import InformationWork from "./_components/information-work";
import "./index.scss";
import { Button } from "antd";
import { DownloadIcon, IconFile, IconFilePending, IconPlay, NvidiaIcon } from "@component/constants/Icon";
import InfoSection from "./_components/info-section";

type Props = {
    params: {
        id: string;
        work_id: string;
    };
};

const Page = ({ params }: Props) => {
    const { id, work_id } = params;
    const workDetail = project.find((item: any) => item.id === id);
    const workItemDetail = workDetail && workDetail.listWork.find((item: any) => item.id.toString() === work_id);
    console.log(workDetail);
    console.log(workItemDetail);
    return (
        <ProjectContainer>
            <div className="infomation-work-container">
                <NavToMain />
                <div className="nav-title">
                    <p>{workDetail?.name}</p>
                    <div className="nav-title-icon">
                        <Image width={32} height={32} src={"/images/detail.svg"} alt="detail" />
                    </div>
                </div>
                <InformationWork
                    projectId={workDetail?.id}
                    resulting={workDetail?.resulting}
                    createDate={workDetail?.createDate}
                />
            </div>
            <div className="line-detail" />
            <div className="work-item-detail-container">
                <div className="work-status">
                    <div className="work-status-header">
                        <div className="infowork-tag-item">
                            <p>Work status</p>
                        </div>
                        <Image src={"/images/01.png"} width={272} height={272} alt="progress" />
                        <Button shape="round" className="btn-gradient">
                            <IconPlay size={20} />
                        </Button>
                    </div>
                    <div className="line" />
                    <div className="work-status-body">
                        <div className="infowork-tag-item">
                            <p>Billing</p>
                        </div>
                        <div className="infowork-info">
                            <div className="info-time">
                                <p>Uptime</p>
                                <p className="time">
                                    <span>{workItemDetail?.upTimeHours}</span>H{" "}
                                    <span>{workItemDetail?.upTimeMinutes}</span>M{" "}
                                    <span>{workItemDetail?.upTimeSeconds}</span>S
                                </p>
                            </div>
                            <div className="info-fee">
                                <div>
                                    <p>Hour fee</p>
                                    <p className="fee">
                                        <span>{workItemDetail?.hourFee}</span>$
                                    </p>
                                </div>
                                <div>
                                    <p>Daily fee</p>
                                    <p className="fee">
                                        <span>{workItemDetail?.dailyFee}</span>$
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="work-item-info">
                    <InfoSection title="Device">
                        <div className="device-info">
                            <div className="title">
                                <NvidiaIcon color="#77B900" size={20} />
                                <p className="text-primary">RTX 4000 SFF Ada Generation</p>
                            </div>
                            <div className="count">26</div>
                        </div>
                    </InfoSection>
                    <InfoSection title="Monitoring">
                        {workItemDetail?.error_logs.map((item, index) => {
                            return (
                                <div key={index} className="monitoring-section">
                                    <p className="timestamps">{item.timestamp}</p>
                                    <p className="traceback">{item.traceback}</p>
                                </div>
                            );
                        })}
                    </InfoSection>
                    <InfoSection title="Run Script">
                        <div className="run-script-container-select-zone">
                            <div className="icon-text">
                                <IconFile size={32} />
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

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                            <div className="uploading-card">
                                <div className="icon">
                                    <Image src="/images/icon_file_loading.svg" alt="file" width={18} height={18} />
                                </div>
                                <div className="file-info" style={{ color: "white" }}>
                                    <div className="header-info">
                                        <p>Refeat_test.co.py</p>
                                        <Image src="/images/icon_close.svg" alt="file" width={10} height={10} />
                                    </div>
                                    <div className={true ? "progress-bar" : "error-progress"}>
                                        <div
                                            className={true ? "progress" : "error-progress-bar"}
                                            style={{ width: `${(30 / 40) * 100}%` }}
                                        ></div>
                                    </div>
                                    <div className="progress-info">
                                        <p>
                                            {30} / {40}
                                        </p>
                                        <p>{`${((30 / 40) * 100).toFixed(2)}%`}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="uploaded-card">
                                <IconFilePending size={32} />
                                <div className="file-info" style={{ color: "white" }}>
                                    <div className="header-info">
                                        <p>Refeat_test.co.py</p>
                                    </div>
                                    <div className="progress-info">
                                        <p>10MB</p>
                                    </div>
                                </div>
                                <div className="icon_trash">
                                    <Image src="/images/icon_trash.svg" alt="file" width={15} height={15} />
                                </div>
                            </div>
                        </div>
                    </InfoSection>
                    <InfoSection title="Result">
                        <div className="result-card">
                            <IconFilePending size={32} />
                            <div className="file-info" style={{ color: "white" }}>
                                <div className="header-info">
                                    <p>Refeat_test.co.py</p>
                                </div>
                                <div className="progress-info">
                                    <p>10MB</p>
                                </div>
                            </div>
                            <div className="result-btn">Working on...</div>
                        </div>
                        <div className="result-card">
                            <IconFilePending size={32} />
                            <div className="file-info" style={{ color: "white" }}>
                                <div className="header-info">
                                    <p>Refeat_test.co.py</p>
                                </div>
                                <div className="progress-info">
                                    <p>10MB</p>
                                </div>
                            </div>
                            <div className="result-btn"><DownloadIcon size={14}/> Download</div>
                        </div>
                    </InfoSection>
                </div>
            </div>
        </ProjectContainer>
    );
};

export default Page;
