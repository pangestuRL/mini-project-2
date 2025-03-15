const testiData = [
    {name : "Thomas Daniel", rate:"⭐⭐⭐⭐⭐", testimoni:"Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."},
    {name : "Alena Alex", rate:"⭐⭐⭐⭐⭐", testimoni:"Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."},
    {name : "Thomas Edison", rate:"⭐⭐⭐⭐⭐", testimoni:"Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources."},
]

export default function TestiData () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            {testiData.map((item, index) => (
                <Card key={index} title={item.title} description={item.description} imageUrl={item.imageUrl} />
            ))}
        </div>
    );
}