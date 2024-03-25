import React, { useEffect, useState } from "react";

const ManagerBody = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
    setForm({
      site: "",
      username: "",
      password: "",
    });
  };

  console.log(passwordArray);
  return (
    <div className=" w-[90%] sm:w-[80%] mx-auto">
      <div className="flex justify-center">
        <div className="p-4">
          <div className="flex justify-center">
            <p className="text-[#0B6DFF] text-xl font-bold">
              pass
              <span className="border py-[2px] px-2 rounded-full bg-[#0B6DFF] text-white">
                Guard
              </span>
            </p>
          </div>
          <p>Your own password Manager.</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-[80%] border mx-auto py-2 px-4 rounded-full">
          <input
            onChange={handleChange}
            value={form.site}
            name="site"
            className="w-full outline-none text-lg"
            type="text"
            placeholder="Enter website url"
          />
        </div>
        <div className="flex gap-4 w-[80%]  mx-auto">
          <div className="w-[60%] border py-2 px-4 rounded-full">
            <input
              onChange={handleChange}
              value={form.username}
              name="username"
              className="w-full outline-none text-lg"
              type="text"
              placeholder="Enter username"
            />
          </div>
          <div className=" w-[40%] border py-2 px-4 rounded-full">
            <input
              onChange={handleChange}
              value={form.password}
              name="password"
              className="w-full outline-none text-lg"
              type="password"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="w-fit mx-auto">
          <button
            onClick={savePassword}
            className="border px-6 py-2 rounded-full flex items-center font-medium text-white bg-[#0B6DFF]"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
      <div className="border py-4">
        <p className="w-[80%] mx-auto text-md font-semibold py-2">
          Your Passwords
        </p>
        {passwordArray.length === 0 && (
          <p className="w-[80%] mx-auto font-normal">No passwords to show!</p>
        )}
        {passwordArray.length > 0 && (
          <div className="w-[80%] mx-auto">
            <table className="w-full table-auto bg-slate-100 rounded-xl overflow-hidden">
              <thead className="bg-[#0B6DFF] text-white ">
                <tr>
                  <th className="text-start py-2 px-2">Site</th>
                  <th className="text-start py-2 px-2">Username</th>
                  <th className="text-start py-2 px-2">Password</th>
                </tr>
              </thead>
              <tbody>
                {passwordArray.map((item, idx) => {
                  return (
                    <tr key={idx} className="border-b border-white">
                      <td className="text-start py-2 px-2">{item.site}</td>
                      <td className="text-start py-2 px-2">{item.username}</td>
                      <td className="text-start py-2 px-2">{item.password}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagerBody;
