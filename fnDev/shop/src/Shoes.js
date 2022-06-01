export default function Shoes({ item }) {
    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes"+(item.id + 1)+".jpg"} />
            <h4>{item.title}</h4>
            <p>{item.price}</p>
        </div>
    )
}