import React, {Component, PropTypes} from 'react/addons'
import cx from 'classnames'
import Textarea from 'react-textarea-autosize'
import classes from './Comments.css'
import Comment from './Comment'
import shouldPureComponentUpdate from 'react-pure-render/function'

export default class Comments extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.any,
    collapsedCount: PropTypes.number,
    expandedCount: PropTypes.number,
    expanded: PropTypes.bool
  }
  static defaultProps = {
    expandedCount: 5,
    collapsedCount: 3
  }
  state = {
    newComment: '',
    activeDropdown: null,
    activeEdit: null
  }
  shouldComponentUpdate = shouldPureComponentUpdate
  _handleChange (e) {
    this.setState({
      newComment: e.target.value
    })
  }
  _handleKeyPress (e) {
    if (e.keyCode === 13) {
      this.setState({
        newComment: ''
      })
    }
  }
  render () {
    const {data: comments, expanded} = this.props
    console.log('render')
    return (
      <div className={classes.container}>
          {[...comments].map(({comment_id, body, user, saving}, index) =>
            <Comment
              name={user.name}
              id={comment_id}
              body={body}
              dropdownActive={comment_id === this.state.activeDropdown}
              editing={comment_id === this.state.activeEdit}
              saving={saving}
              onDropdown={() => {
                let activeDropdown
                if (comment_id === this.state.activeDropdown) {
                  activeDropdown = null
                } else {
                  activeDropdown = comment_id
                }
                this.setState({activeDropdown})
              }}
              onEdit={() => this.setState({
                activeEdit: comment_id,
                activeDropdown: null,
              })}
              onEditCancel={() => this.setState({activeEdit: null})}
              onChange={body => {
                this.context.store.dispatch(CommentActions.updateComment(comment_id, this.props.id, body))
                this.setState({
                  activeEdit: null
                })
              }}
            />
            )
          }
          {expanded && <Textarea
            placeholder={'Write a comment...'}
            className={cx(classes.newComment, {[classes.empty]: this.state.newComment === ''})}
            onKeyDown={::this._handleKeyPress}
            onChange={::this._handleChange}
            value={this.state.newComment}
            />
          }
      </div>
    )
  }
}
