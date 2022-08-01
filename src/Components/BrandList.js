import React from 'react';

class BrandList extends React.Component {

    render() {
        const { brands, handleEdit, handleDelete, enableAction } = this.props;
        const items = brands.map((brand) =>
            <tr key={brand.code}>
                <td>{brand.name}</td>
                <td>{brand.description}</td>
                <td>
                    {enableAction && (
                        <button onClick={() => handleEdit(brand)}>Editar</button>
                    )}
                    {enableAction && (
                        <button onClick={() => handleDelete(brand)}>Eliminar</button>
                    )}
                </td>
            </tr>
        );

        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        );
    }
}
export default BrandList;