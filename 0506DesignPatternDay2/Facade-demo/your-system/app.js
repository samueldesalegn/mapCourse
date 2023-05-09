import MortgageFacade from "../mortgage-subsystem/app";

class MortgageAgency {

    apply(name, amount) {
        MortgageFacade.applyFor(name, amount);
    }

}

new MortgageAgency().applyFor(name, amount);