import "./styles.css";

export const LoaderComponent = () => {

    return (
        <div className="spinner">
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden"></span>
            </div>
            <div>
                <h5 className="leyenda-spinner">Cargando datos...</h5>
            </div>
        </div>
    )
}
