export const unAuthenticatedRoute = ["/auth/sign-in", "/auth/sign-in/email", "/auth/sign-up", "/"];

export const rate = [
    {
        id: 1,
        title: "Uptime rate (7d)",
        content: "94%",
    },
    {
        id: 2,
        title: "PoT Reward",
        content: "45,463 GP",
    },
    {
        id: 3,
        title: "Hire fee",
        content: "5,568 GP",
    },
    {
        id: 4,
        title: "My GP Power",
        content: "321,406",
    },
];

export const provider = [
    {
        state: "Online",
        key: "1",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "New York No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "2",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "London No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Online",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "3",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "Sydney No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Online",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "4",
        name: "Mac-mini2",
        chip: "M2 Pro",
        ulti: "99%",
        address: "Sydney No. 1 Lake Park",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Paused",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "5",
        name: "Device-Laptop-101",
        chip: "GeForce RTX 3050 Ti Laptop",
        address: "Sydney No. 1 Lake Park",
        ulti: "99%",
        network: "High",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Deleted",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
    {
        key: "6",
        name: "Device-Laptop-101",
        chip: "GeForce RTX 3050 Ti Laptop",
        address: "Sydney No. 1 Lake Park",
        network: "High",
        ulti: "99%",
        uptime: "29D 16Hrs 46Mins",
        pool: "Flexible",
        state: "Blocked",
        hire: "Hire",
        date: "29",
        hour: "16",
        min: "46",
    },
];

export const logo = {
    ["M2 Pro"]: "/images/apple.svg",
    ["GeForce RTX 3050 Ti Laptop"]: "/images/device.svg",
};

export const steps = [
    {
        id: 1,
        title: 1,
        content: [
            {
                id: 1,
                img: "/images/window.svg",
                title: "Windows",
                link: "",
            },
            {
                id: 2,
                img: "/images/apple.svg",
                title: "Mac",
                link: "",
            },
            {
                id: 3,
                img: "/images/untubu.svg",
                title: "Untubu",
                link: "",
            },
        ],
        subTitle: "Os Select",
        subContent: "Download WNC installer for your operating system",
    },
    {
        id: 2,
        title: 2,
        content: [
            {
                id: 1,
                img: "/images/dowload.svg",
                title: "Download Docker",
                link: "https://www.docker.com/products/docker-desktop/",
            },
            {
                id: 2,
                img: "/images/dowload.svg",
                title: "Install and run WNC through the downloaded installer",
                link: "https://provider.gpgpu.ai/download/window-msi",
            },
            {
                id: 3,
                img: "/images/dowload.svg",
                title: "Copy the connection code to WNC",
                link: "https://www.docker.com/products/docker-desktop/",
            },
        ],
        subTitle: "Set Up",
        subContent: "Follow the instructions below to set up a cennection via the WNC",
    },
    {
        id: 3,
        title: 3,
        content: [],
        subTitle: "Connection",
        subContent: "Check and confirm specifications of your connected device",
    },
];

export const stepCreateProject = [
    {
        id: 1,
        title: "New Project name",
        subTitle: "Please enter a project name to create a new project",
        content: [
            {
                id: 1,
                img: "/images/device.svg",
                title: "Device",
            },
        ],
    },
    {
        id: 2,
        title: "Select Device",
        subTitle: "Select the device you want to use for your project",
    },
];

export interface FileData {
    id: string;
    fileName: string;
    fileSize: number; // in MB
    uploadedSize: number; // in MB
    progress: number; // in percentage
    status: "uploading" | "done" | "error";
    error?: string;
}

interface FileCategories {
    uploadingOrFail: FileData[];
    uploaded: FileData[];
}

export const fileData: FileCategories = {
    uploadingOrFail: [
        {
            id: "1",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 123.51,
            progress: 21,
            status: "uploading",
        },
        {
            id: "2",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 123.51,
            progress: 78,
            status: "uploading",
        },
        {
            id: "3",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 123.51,
            progress: 100,
            status: "error",
            error: "Error",
        },
    ],
    uploaded: [
        {
            id: "4",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
        {
            id: "5",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
        {
            id: "6",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
        {
            id: "7",
            fileName: "check_test_rv1.zip",
            fileSize: 885.65,
            uploadedSize: 885.65,
            progress: 100,
            status: "done",
        },
    ],
};

export const project = [
    {
        id: "1",
        name: "Project_name",
        resulting: "3,153.14 MB",
        createDate: "2024-06-20 12:32",
        listWork: [
            {
                id: 1,
                state: "Online",
                name: "Running test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
            },
            {
                id: 2,
                state: "Paused",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
            },
            {
                id: 3,
                state: "Finished",
                name: "Running test_test",
                device: 3,
                data: 1.5,
                upTimeHours: 4,
                upTimeMinutes: 11,
                upTimeSeconds: 32,
                createdAt: "2024-06-30 01:42",
            },
        ],
    },
];
