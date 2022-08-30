/*
ESTE ES UN ARCHIVO AUXILIAR O UTILITARIO AL SERVICE WORKER.
PERMITE PASAR O TRASLADAR LOGICA DEL SW AQUI.
 */

const actualizaCacheDinamico = (dynamicCache, request, response) => {
    if(response.ok){
        return caches.open(dynamicCache).then(cache => {
            cache.put(request, response.clone());
            return response;
        });
    }else{
        return response;
    }
}