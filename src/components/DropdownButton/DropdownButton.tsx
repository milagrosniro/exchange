import './dropdownButton.scss';

function DropdownButton( props : any) {

    var content = props.content;

    var handleClick = props.onClick;

    return (

        <div>

            <div>

                { content }

            </div>

        </div>

    )

}

export { DropdownButton }