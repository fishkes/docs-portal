import React, { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const versions = [
    { id: 1, name: 'SaaS' },
    { id: 2, name: 'v2022.4' },
    { id: 3, name: 'v6.5' },
    { id: 4, name: 'v6.2' },
    { id: 5, name: 'v6.0' },
]

export default () => {
    const [selectedVersion, setSelectedVersion] = useState(versions[0])

    return (
        <Listbox value={selectedVersion} onChange={setSelectedVersion}>
            <Listbox.Button className='flex items-center font-bold bg-transparent text-white'>
                <span>{selectedVersion.name}</span>
                <ChevronDownIcon className=' h-6 w-6' />
            </Listbox.Button>
            <Listbox.Options className='rounded-lg bg-white overflow-hidden top-2 relative list-none m-0 p-0'>
                {versions.map((version) => (
                    <Listbox.Option
                        key={version.id}
                        value={version}
                        className="bg-white text-black px-2 py-2 min-w-[150px] ui-active:bg-blue-500 ui-active:text-white text-sm"
                    >
                        <div className='flex items-center'>
                            {version.name}
                        </div>
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}