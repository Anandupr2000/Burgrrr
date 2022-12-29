import React from 'react'
// import '../styles/menu.css'
function Menu() {
    return (
        <div id='Menu'>
            <div className="leftPanel">
                <span>
                    <span className='heading'>Our Menu</span>
                </span>
                <table className='menuTable'>
                    <thead>
                        <tr>
                            <th>Ingredients</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>White wheat bun</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Patty</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Onions</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Tomatoes</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Lettuce</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>Cheese Slice</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="rightPanel">
                <span >Choose what goes into your burger ?</span>
            </div>
        </div>
    )
}

export default Menu