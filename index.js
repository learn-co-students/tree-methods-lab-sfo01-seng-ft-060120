const inOrder = (node) => {
    if (node.left){
        inOrder(node.left)
    }
    console.log(node.data)
    if (node.right){
        inOrder(node.right)
    }
}

const findOrAdd = (rootNode, newNode) => {
    if (rootNode.data === newNode.data) return true
    if (newNode.data < rootNode.data){
        if (rootNode.left){
            return findOrAdd(rootNode.left, newNode)
        } else {
            return rootNode.left = newNode
        }
    } else {
        if (rootNode.right) {
            return findOrAdd(rootNode.right, newNode)
        } else {
            return rootNode.right = newNode
        }
    }
}

const max = (rootNode) => {
    if (rootNode.right) {
        return max(rootNode.right)
    } else {
        return rootNode
    }
}

const min = (rootNode) => {
    if (rootNode.left) {
        return min(rootNode.left)
    } else {
        return rootNode
    }
}