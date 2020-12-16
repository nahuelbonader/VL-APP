const router = require("express").Router();
const {
  findOneStore,
  findAllStores,
  deleteStore,
  updateStore,
  createStore,
  addNewAdmin,
  deleteAnAdmin
} = require("../controllers/stores-controllers");

router.route("/").get(findAllStores).post(createStore);

// AGREGAR MIDDLEWARE AUTHORIZATION AL UPDATE (EL USER TIENE QUE SER ADMIN O SUPERADMIN DEL STORE) STORE.ADMIN.INCLUDE(REQ.USER_ID) || STORE.SUPERADMIN == REQ.USER_ID
router.route("/:id").put(updateStore).delete(deleteStore).get(findOneStore)

router.delete('/:storeId/:adminId', deleteAnAdmin)
router.post('/:storeId/:adminId', addNewAdmin)
module.exports = router;
