import React from 'react'

export default function Repos({ repositories }) {
    return (
               <>
            {repositories.map(items => (
                <div key={items}> {repositories}
                    {/* {items.name} {items.description} */}
                    </div>
            ))}
        
    </>
    )
}

