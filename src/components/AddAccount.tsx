import { Input } from "@material-tailwind/react";

function AddAccount() {
  return (
    <div>
      <p>فرم ایجاد حساب جدید</p>
      <div className="w-72 mt-3">
        <Input label="شماره حساب" crossOrigin={undefined} />
      </div>
    </div>
  );
}

export default AddAccount;
