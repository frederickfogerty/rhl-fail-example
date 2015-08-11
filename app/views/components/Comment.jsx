import React, {Component, PropTypes} from 'react/addons'
import cx from 'classnames'
import Textarea from 'react-textarea-autosize'
import classes from './Comment.css'
import Tappable from 'react-tappable'
import shouldPureComponentUpdate from 'react-pure-render/function'

export default class Comment extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    editing: PropTypes.bool.isRequired,
    dropdownActive: PropTypes.bool.isRequired,
    onEdit: PropTypes.func.isRequired,
    onEditCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDropdown: PropTypes.func.isRequired,
  }
  state = {
    editing: false,
    dropdown: false
  }
  componentWillReceiveProps (nextProps) {
    if (!this.props.editing && nextProps.editing) {
      this.setState({
        editValue: nextProps.body
      })
    }
  }
  shouldComponentUpdate = shouldPureComponentUpdate
  render () {
    const {name, body} = this.props
    return (
        <div
          key={this.props.id}
          className={cx(classes.comment, this.props.saving && classes.saving)}
          >
          <div
            className={classes.commentBody}>
            <span
              className={classes.user}
              >
              {name}
              </span>
            {this.props.editing ?
              [<Textarea
                className={classes.commentEdit}
                value={this.state.editValue}
                onChange={(e) => this.setState({editValue: e.target.value})}
                />,
              <Tappable
                className={classes.save}
                onTap={() => this.props.onChange(this.state.editValue)}
                >
                Save?
                </Tappable>,
              <Tappable
                className={classes.cancel}
                onTap={this.props.onEditCancel}
                >
                Cancel
                </Tappable>
              ]
              :
              body}
          </div>
          <Tappable
            className={cx(classes.dropdownTrigger, 'ion-edit')}
            onTap={this.props.onDropdown}
            />
          <div
            className={cx(classes.dropdown, this.props.dropdownActive && classes.dropdownActive)}
          >
            <div className={classes.arrow} />
            <Tappable component="li" onTap={this.props.onEdit}>Edit...</Tappable>
            <li>Delete...</li>
          </div>
        </div>
      )
  }
}

