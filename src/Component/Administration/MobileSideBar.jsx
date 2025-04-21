import { Listbox } from '@headlessui/react'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { sideNavItems } from "../../constants/ADMINISTRATION.JS"

const MobileSidebar = () => {
  const [selected, setSelected] = useState(sideNavItems[0])
  const navigate = useNavigate()

  useEffect(() => {
    navigate(selected.href)
  }, [selected, navigate])

  return (
  <div className="w-full max-w-xs mx-auto mt-4 md:hidden ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400">
            {selected.name}
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
            {sideNavItems.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                {item.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  )
}

export default MobileSidebar
