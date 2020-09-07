import { i18n } from '../../plugins/lang/i18n.js';
import GridlsFunction from '../../components/Functions/gridFunction.vue';
import modalFunction from "../../components/Functions/modalFromFunction.vue";
import { mapMutations, mapActions } from "vuex";
export const FunctionController = {
    components: {
        GridlsFunction,
        modalFunction
    },
    data() {
        return {
            typeModal : false,
            defualfrom: {
                request: {
                    FUNCTION_ID: '',
                    FUNCTION_NAME: null,
                    FUNCTION_NAME_LA: null,
                    FUNCTION_NAME_VI: null,
                    FUNCTION_DECS: null,
                    FUNCTION_TYPE: 1,
                    FUNCTION_STATUS: "A"
                }
            }
        };
    },
    methods: {
        ...mapMutations("functions", ["setmodalfunction"]),
        ...mapActions("functions", ["InsertUpdateFunction"]),
        ...mapActions("functions", ["GetAlllistFunction"]),
        AddNew: function () {
            this.resetFrom();
            this.typeModal = true;
            this.setmodalfunction(true);
        },
        CloseModal: function () {
            this.setmodalfunction(false);
        },
        Delete: function (val) {
            this.$q
                .dialog({
                    title: i18n.t("Confirm"),
                    message: i18n.t("Areyousuretodelete"),
                    ok: {
                        push: true,
                        label: i18n.t("Ok")
                    },
                    cancel: {
                        push: true,
                        color: "red",
                        label: i18n.t("Cancel")
                    },
                    persistent: true
                })
                .onOk(() => {
                    let lsData = Object.assign({}, val);
                    this.defualfrom.request = JSON.parse(JSON.stringify(lsData));
                    this.defualfrom.request.FUNCTION_STATUS = val.FUNCTION_STATUS == "I" ? 'A' : 'I';
                    this.Save(this.defualfrom);
                });
        },
        Edit: function (val) {
            this.typeModal = false;
            this.resetFrom();
            let lsData = Object.assign({}, val);
            this.defualfrom.request = JSON.parse(JSON.stringify(lsData));
            this.setmodalfunction(true);
        },
        Save: function (val) {            
            this.InsertUpdateFunction(val).then(res =>{
              if(res){           
                this.GetAlllistFunction();
                this.setmodalfunction(false);
              }          
            });
        },
        resetFrom: function () {
            this.defualfrom = {
                request: {
                    FUNCTION_ID: '',
                    FUNCTION_NAME: null,
                    FUNCTION_NAME_LA: null,
                    FUNCTION_NAME_VI: null,
                    FUNCTION_DECS: null,
                    FUNCTION_TYPE: 1,
                    FUNCTION_STATUS: "A"
                }
            }
        }
    }
}