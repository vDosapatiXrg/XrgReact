import { Button, Form, Input } from "antd";
const UserForm = () => {
  const [form] = Form.useForm();

  return (
    <Form
      layout="vertical"
      form={form}
      style={{
        maxWidth: 600,
      }}
    >
      
      <Form.Item label="Name">
        <Input placeholder="enter full name" />
      </Form.Item>
      <Form.Item label="Age">
        <Input placeholder="enter age" />
      </Form.Item>
      <Form.Item label="Address">
        <Input placeholder="enter address" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default UserForm;
