import Card from "../components/Card";
import iconCiso from "../images/icon-ciso.svg";
import iconCio from "../images/icon-cio.svg";
import iconSecurity from "../images/icon-security-operator.svg";
import iconIT from "../images/icon-it.svg";

export default function CardGrid() {
    return(
        <section className="py-12">
            <div className="container flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-6">
                <Card
                    icon={iconCiso}
                    title="I’m a CISO"
                    text="Report confidently on the state of your assets and data."
                    link="#"
                />

                <Card
                    icon={iconCio}
                    title="I’m a CIO"
                    text="Understand, quantify, and mitigate underlying risk."
                    link="#"
                />

                <Card
                    icon={iconSecurity}
                    title="I’m a Security Operator"
                    text="Get answers to questions for every investigation."
                    link="#"
                />

                <Card
                    icon={iconIT}
                    title="I’m an IT Operator"
                    text="Understand the entire landscape of your assets."
                    link="#"
                />
            </div>
        </section>
    )
}