import "../index.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import "./Upload.css"

import { Button, Modal, ConfigProvider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
    Checkbox,
    Form,
    Input,
    Radio,
    Upload as UploadCom,
} from 'antd';

const { TextArea } = Input;

export default function Upload() {

    const _data = [
        {
            id: "1",
            album: {
                img: "img/cut.png",
                href: "https://www.youtube.com/watch?v=hlLgrjV7GFQ"
            },
            streams: "100,678,778",
            singer: "iann dior",
            name: "cutthroat",
            publishDate: "2022-6-10",
            arranger: "",
            composer: "",
            language: "",
            lyricism: "",
            lyrics: "",
            style: [],
            version: ""
        },
        {
            id: "2",
            album: {
                img: "img/industry-plant.png",
                href: "https://www.youtube.com/watch?v=vx4Sh4IPEcM"
            },
            streams: "90,998,667",
            singer: "iann dior",
            name: "gone girl",
            publishDate: "2022-5-20"
        },
        {
            id: "3",
            album: {
                img: "img/dont.png",
                href: "https://www.youtube.com/watch?v=rx6TNz4mC2Y"
            },
            streams: "90,556,668",
            singer: "iann dior",
            name: "don't wanna believe",
            publishDate: "2021-7-1"
        },
        {
            id: "4",
            album: {
                img: "img/isit.png",
                href: "https://www.youtube.com/watch?v=4KhDCEB07Fc"
            },
            streams: "70,777,555",
            singer: "iann dior",
            name: "is it you",
            publishDate: "2023-1-17"
        },
        {
            id: "5",
            album: {
                img: "img/holding.jpeg",
                href: "https://www.youtube.com/watch?v=BMmUkrUehrM"
            },
            streams: "70,123,324",
            singer: "iann dior",
            name: "Holding On",
            publishDate: "2021-3-22"
        }
    ]

    const [data, setData] = useState(_data)
    const [show, setShow] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [form] = Form.useForm();
    const [currentId, setCurrentId] = useState(0);
    const [fileList, setFileList] = useState([]);



    useEffect(() => {
        if (!isEdit) {
            setFileList([])
        }

    }, [isEdit])





    const remove = (e) => {
        setData(data.filter(item => item.id !== e.target.id))
    }
    const upload = () => {
        setShow(true)
        setIsEdit(false)
    }
    const onReset = () => {
        form.resetFields();
        setFileList([])
        setShow(false);
    }
    const onFinish = (values) => {
        console.log(values)
        if (!isEdit) {
            const obj = Object.assign({}, values, {
                id: data[data.length - 1].id + 1,
                album: {
                    img: fileList[0].thumbUrl,
                    href: ""
                },
                streams: "0",
                publishDate: "2023-3-13"
            })

            data.push(obj)
            setData(data)
        } else {
            let index
            const preObj = data.filter((_d, _index) => {
                index = _index
                return _d.id === currentId
            })
            const newObj = Object.assign({}, preObj[0], values, {
                album: {
                    img: fileList[0].thumbUrl,
                    href: ""
                },
            })

            data[index] = newObj

            setData(data)
        }

        form.resetFields();
        setShow(false);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const setFileld = (data) => {
        setCurrentId(data.id)
        form.setFieldsValue(data)
        setFileList([{
            url: data.album.img
        }])
    }
    const handleChange = ({ fileList: newFileList }) => {
        if (newFileList.length > 1) {
            newFileList.splice(0, 1)
        }

        setFileList(newFileList)
    };
    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const handlePreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };


    const FormUpload = () => {

        return (
            <Form
                form={form}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                size="large"
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Song Type"
                    name="version"
                    rules={[
                        {
                            required: false,
                            message: 'Please choose Song Version!',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value="recordingStudio"> Studio </Radio>
                        <Radio value="soundMixing"> Mixtape </Radio>
                        <Radio value="accompaniment"> Instrumental </Radio>
                        <Radio value="live"> Live </Radio>
                        <Radio value="demo"> Demo </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Song Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Song Name',
                        },
                    ]}
                >
                    <Input placeholder="Enter Song Name Here" />
                </Form.Item>
                <Form.Item
                    label="Singer"
                    name="singer"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Singer Name',
                        },
                    ]}
                >
                    <Input placeholder="Enter Singer's name" />
                </Form.Item>
                <Form.Item
                    label="Language"
                    name="language"
                    rules={[
                        {
                            required: true,
                            message: 'Please Select A Language',
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value="recordingStudio"> English </Radio>
                        <Radio value="soundMixing"> Chinese </Radio>
                        <Radio value="accompaniment"> Japanese </Radio>
                        <Radio value="live"> Korean </Radio>
                        <Radio value="demo"> Other Language </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="style"
                    label="Genre" rules={[
                        {
                            required: true,
                            message: 'Please Select One or More Genre',
                        },
                    ]}>
                    <Checkbox.Group>
                        <Checkbox value="classic" style={{ lineHeight: '32px' }}>
                            Classical
                        </Checkbox>
                        <Checkbox value="ancientStyle" style={{ lineHeight: '32px' }}>
                            R&B
                        </Checkbox>
                        <Checkbox value="rap" style={{ lineHeight: '32px' }}>
                            Rap
                        </Checkbox>
                        <Checkbox value="popular" style={{ lineHeight: '32px' }}>
                            Pop
                        </Checkbox>
                        <Checkbox value="rock" style={{ lineHeight: '32px' }}>
                            Rock
                        </Checkbox>
                        <Checkbox value="lightMusic" style={{ lineHeight: '32px' }}>
                            Light Music
                        </Checkbox>
                    </Checkbox.Group>
                </Form.Item>
                <Form.Item
                    label="Lyric By"
                    name="lyricism"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Lyric Composer',
                        },
                    ]}
                >
                    <Input placeholder="Enter Lyric Composer Here" />
                </Form.Item>
                <Form.Item
                    label="Beat By"
                    name="arranger"
                    rules={[
                        {
                            required: true,
                            message: 'Please Enter Beat Composer',
                        },
                    ]}
                >
                    <Input placeholder="Enter Beat Composer Here" />
                </Form.Item>
                <Form.Item label="Lyrics" name="lyrics">
                    <TextArea rows={4} placeholder="Enter Your Lyrics Here"/>
                </Form.Item>
                <Form.Item
                    label="Cover"
                    rules={[
                        {
                            required: false,
                            message: 'Upload A Picture',
                        },
                    ]}
                    // name="pic"
                    valuePropName="fileList"
                // getValueFromEvent={normFile}
                >
                    <UploadCom
                        beforeUpload={(file) => {
                            setFileList([...fileList, file]);
                            return false;
                        }}
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                        onPreview={handlePreview}
                    >
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </UploadCom>
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        )
    }

    return (
        <>
            <Modal
                title="Upload"
                open={show}
                footer={null}
                closable={false}
            >
                <p>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: "#1677FF",
                                borderRadius: 6,
                            },
                        }}
                    >
                        <FormUpload />
                    </ConfigProvider>
                </p>
            </Modal>

            <Nav />
            <header>
                <div className="container">
                    <h1>Manage Your Tracks</h1>
                    <p className="lead">The perfect distribution managment system for artist</p>
                </div>
            </header>
            <main>
                <button type="submit" className="btn btn-primary" onClick={() => { upload() }}>Upload a Track</button>

                <table>
                    <thead>
                        <tr>
                            <th scope="col">Album</th>
                            <th scope="col">Streams</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Title</th>
                            <th scope="col">Publish Date</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map(item => {
                                return (
                                    <tr>
                                        <td>
                                            <a href={item.album.href} target="_blank" rel="noopener noreferrer">
                                                <img src={item.album.img} alt="holdingOn" />
                                            </a>
                                        </td>
                                        <td>{item.streams}</td>
                                        <td>{item.singer}</td>
                                        <td>{item.name}</td>
                                        <td>{item.publishDate}</td>
                                        <td><button className="btn actions" onClick={() => {
                                            setShow(true);
                                            setFileld(item);
                                            setIsEdit(true);
                                        }}>Edit</button></td>
                                        <td><button className="btn actions" id={item.id} onClick={(e) => remove(e)}>Remove</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </main>
            <Footer />
        </>
    )
}