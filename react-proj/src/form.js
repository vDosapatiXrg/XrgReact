import { Button, Form, Input } from "antd";
const UserForm = ({handleCancel}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        handleCancel()
        form.resetFields();
    };

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}

        >

            <Form.Item label="Name" name="name">
                <Input placeholder="enter full name" />
            </Form.Item>
            <Form.Item label="Age" name="age">
                <Input placeholder="enter age" />
            </Form.Item>
            <Form.Item label="Address" name="address">
                <Input placeholder="enter address" />
            </Form.Item>
            <Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form.Item>
        </Form>
    );
};
export default UserForm;
