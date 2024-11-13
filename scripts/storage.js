const puntajesStorage = {
    llave: 'puntajes',
    guardar(registro) {
        if (registro.nombre && typeof registro.puntaje === 'number') {
            let current = this.traer();
            localStorage.setItem(this.llave, JSON.stringify([...current, registro]))
        }
    },
    traer() {
        const current = localStorage.getItem(this.llave)

        return !current || !Array.isArray(JSON.parse(current)) ? [] : JSON.parse(current);
    }
}